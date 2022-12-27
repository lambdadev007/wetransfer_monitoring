import React, { useState } from "react";
import { Popover, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@/components/Button";

const useStyles = makeStyles(theme => ({
    main: {
        padding: theme.spacing(2)
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: theme.spacing(1),
        "& > * + *": {
            marginLeft: theme.spacing(1)
        }
    }
}));

const Popconfirm = ({
    title,
    onOk,
    onCancel,
    okText = "დიახ",
    cancelText = "არა",
    ...props
}) => {
    const [popoverAnchor, setPopoverAnchor] = useState(null);
    const cls = useStyles();

    const isPopoverOpen = !!popoverAnchor;

    const openPopover = event => {
        setPopoverAnchor(event.currentTarget);
    };

    const closePopover = () => {
        setPopoverAnchor(null);
    };

    const renderedPopover = (
        <Popover
            anchorEl={popoverAnchor}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={isPopoverOpen}
            onClose={closePopover}
        >
            <div className={cls.main}>
                <Typography variant="body1">{title}</Typography>
                <div className={cls.buttons}>
                    <Button
                        color="primary"
                        onClick={() => {
                            onCancel && onCancel();
                            closePopover();
                        }}
                    >
                        {cancelText}
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            onOk();
                            closePopover();
                        }}
                    >
                        {okText}
                    </Button>
                </div>
            </div>
        </Popover>
    );

    return (
        <>
            {renderedPopover}
            <div onClick={openPopover}>{props.children}</div>
        </>
    );
};

export default Popconfirm;
