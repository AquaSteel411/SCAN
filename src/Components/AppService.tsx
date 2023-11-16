
export const validateInn = (inn, setError) => {
    let result = false;
    if (typeof inn === 'number') {
        inn = inn.toString();
    } else if (typeof inn !== 'string') {
        inn = '';
    }
    if (!inn.length) {
        setError('ИНН пуст');
    } else if (/[^0-9]/.test(inn)) {
        setError('ИНН может состоять только из цифр');
    } else if ([10, 12].indexOf(inn.length) === -1) {
        setError('ИНН может состоять только из 10 или 12 цифр');
    } else {
        const checkDigit = function (inn, coefficients) {
            let n = 0;
            for (let i in coefficients) {
                n += coefficients[i] * inn[i];
            }

            return parseInt(String(n % 11 % 10));
        };
        switch (inn.length) {
            case 10:
                let n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                if (n10 === parseInt(inn[9])) {
                    result = true;
                }
                break;
            case 12:
                let n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                let n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                if ((n11 === parseInt(inn[10])) && (n12 === parseInt(inn[11]))) {
                    result = true;
                }
                break;
        }
        if (!result) {
            setError('Неправильное контрольное число');
        }
    }
    return result;
}

export const validateQuantity = (quantity, setError) => {
    let result = false;
    if (typeof quantity === 'number') {
        quantity = quantity.toString();
    } else if (typeof quantity !== 'string') {
        quantity = '';
    }

    if (!quantity.length) {
        setError('Поле не может быть пустым');
    } else if (/[^0-9]/.test(quantity)) {
        setError('Поле может состоять только из цифр');
    } else if ((quantity < 1) || (quantity > 100)) {
        setError('Введите число от 1 до 100');
    } else {
        result = true
    }

    return result
}

export const validateDate = (startDate, endDate, setError) => {
    let result = false;
    if (startDate > endDate) {
        setError('Неправильный интервал дат')
    } else if (!startDate && !endDate) {
        setError('Пустое поле')
    } else if ((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(startDate)) && (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(endDate))) {
        setError('Недопустимые символы')
    } else {
        result = true
    }

    return result
}