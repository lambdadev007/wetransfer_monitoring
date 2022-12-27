const ka = {
    props: {
        MuiBreadcrumbs: {
            expandText: "გზის ჩვენება"
        },
        MuiTablePagination: {
            backIconButtonText: "წინა გვერდი",
            labelRowsPerPage: "ჩანაწერები ერთ გვერდზე:",
            labelDisplayedRows: ({ from, to, count }) =>
                `ნაჩვენებია ${from}-${to} ${
                    count !== -1 ? `${count}-დან` : `მეტი ვიდრე ${to}`
                }`,
            nextIconButtonText: "შემდეგი გვერდი"
        },
        MuiRating: {
            getLabelText: value => `${value} Star${value !== 1 ? "s" : ""}`,
            emptyLabelText: "Empty"
        },
        MuiAutocomplete: {
            clearText: "წაშლა",
            closeText: "დახურვა",
            loadingText: "ჩატვირთვა…",
            noOptionsText: "მონაცემები ვერ მოიძებნა",
            openText: "გახსნა"
        },
        MuiAlert: {
            closeText: "დახურვა"
        },
        MuiPagination: {
            "aria-label": "პაგინაციით ნავიგაცია",
            getItemAriaLabel: (type, page, selected) => {
                if (type === "page") {
                    return `${selected ? "" : "Go to "}page ${page}`;
                }
                if (type === "first") {
                    return "Go to first page";
                }
                if (type === "last") {
                    return "Go to last page";
                }
                if (type === "next") {
                    return "Go to next page";
                }
                if (type === "previous") {
                    return "Go to previous page";
                }
                return undefined;
            }
        }
    }
};

export default ka;
