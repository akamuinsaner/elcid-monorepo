export const request = <T>(path: string, options: any): Promise<T> => {
    const { data, headers, method = 'GET' } = options;
    // const userInfo = localStorage.getItem('userInfo')
    //     ? JSON.parse(localStorage.getItem('userInfo'))
    //     : null;
    if (method === 'GET') {
        if (data && Object.keys(data).length) {
            path = `${path}?${Object.keys(data)
                .map(k => k + '=' + data[k])
                .join('&')}`;
        }
        return fetch(path, {
            headers: {
                'Content-Type': 'application/json',
                // Authorization: userInfo ? `Bearer ${userInfo.token}` : null,
                ...headers,
            },
        })
            .then(res => {
                return res.json();
            })
            .then(res => {
                if (res.code === 0) {
                    return res.data;
                } else {
                    throw new Error(res.message);
                }
            });
    } else {
        return fetch(`${path}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                // Authorization: userInfo ? `Bearer ${userInfo.token}` : null,
                ...headers,
            },
            credentials: 'include',
            body: data && JSON.stringify(data),
        })
            .then(res => {
                return res.json();
            })
            .then(res => {
                if (res.code === 0) {
                    return res.data;
                } else {
                    throw new Error(res.message);
                }
            });
    }
};

// export const downloadRequest = (
//     path: string,
//     body: any = {},
//     callback: any = null,
// ) => {
//     let fileName = '';
//     ((path: string, body: any = {}, callback: any) => {
//         fetch(`${path}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept-Ranges': 'byte',
//             },
//             credentials: 'include',
//             body: body && JSON.stringify(body),
//         })
//             .then(res => {
//                 const contentDisposition = res.headers.get(
//                     'content-disposition',
//                 );
//                 fileName = decodeURIComponent(contentDisposition.split('=')[1]);
//                 return res.blob();
//             })
//             .then(blob => {
//                 const a = document.createElement('a');
//                 const url = window.URL.createObjectURL(blob);
//                 a.href = url;
//                 a.download = fileName;
//                 a.click();
//                 window.URL.revokeObjectURL(url);
//                 callback && callback();
//             });
//     })(path, body, callback);
// };
