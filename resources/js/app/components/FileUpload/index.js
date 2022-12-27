import React from "react";
import Upload from "antd/es/upload";
import styled from "styled-components";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CloseIcon from "@material-ui/icons/Close";
import { FormHelperText, ButtonBase } from "@material-ui/core";

const UploadWrapper = styled.div`
    position: relative;
    ${props => (props.disabled ? "pointer-events: none;" : "")};
    .ant-upload.ant-upload-select.ant-upload-select-text {
        width: 100%;
    }
    .ant-upload {
        outline: none;
    }
    .ant-upload .ant-btn {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        background-color: #fff;
        line-height: 1.14;
        padding: 12px 15px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
        border-radius: 7px;
        height: unset;
        border: none;
        color: ${props => (props.disabled ? "#a0a0a0" : "#000")};
        transition: 0.2s;
        cursor: pointer;

        .MuiSvgIcon-root {
            width: 24px;
            height: 22px;
        }
    }

    .ant-upload .ant-btn:hover,
    .ant-upload .ant-btn:focus {
        color: unset;
        background-color: #f8f8f8;
        color: #000;
    }

    .ant-upload-list-text-container {
        margin-top: 8px;
        transition: 0.2s;
        width: ${props => (props.fullWidth ? "100%" : "50%")};
    }

    .ant-upload-list.ant-upload-list-text {
        font-size: 16px;
        line-height: 1.14;
        color: #000;
        display: flex;
        flex-wrap: wrap;
    }
    .ant-upload-list-item {
        font-size: 16px;
        line-height: 1.14;
    }

    .ant-upload-list-item-info .anticon-loading .anticon,
    .ant-upload-list-item-info .ant-upload-text-icon .anticon {
        display: none;
    }
    .ant-upload-list-item-name {
        padding-left: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .ant-upload-list-item:hover .ant-upload-list-item-info {
        background-color: unset;
    }

    .ant-upload-list-item-card-actions-btn {
        opacity: 1;
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        outline: none;
    }

    .ant-upload-list-item-card-actions-btn .MuiSvgIcon-root {
        width: 20px;
        height: 20px;
        color: #a8a7ac;
        cursor: pointer;
        transition: 0.2s;
    }

    .ant-upload-list-item-card-actions-btn:hover,
    .ant-upload-list-item-card-actions-btn:focus {
        background-color: unset;
    }

    .ant-upload-list-item-card-actions-btn:active {
        background: unset;
    }
    .ant-upload-list-item-card-actions-btn:hover .MuiSvgIcon-root,
    .ant-upload-list-item-card-actions-btn:focus .MuiSvgIcon-root {
        color: #000;
    }

    .ant-upload-list-item-info > span {
        display: flex;
        align-items: center;
    }
`;

const FileUpload = ({
    error,
    fullWidth,
    onChange,
    beforeUpload,
    disabled,
    ...props
}) => {
    return (
        <UploadWrapper fullWidth={fullWidth} disabled={disabled}>
            <Upload
                {...props}
                disabled={disabled}
                beforeUpload={file => {
                    beforeUpload && beforeUpload(file);
                    return false;
                }}
                showUploadList={{ removeIcon: <CloseIcon /> }}
                onChange={onChange}
            >
                <ButtonBase className="ant-btn">
                    {props.children}
                    <CloudUploadIcon />
                </ButtonBase>
            </Upload>
            <FormHelperText error={!!error}>{error}</FormHelperText>
        </UploadWrapper>
    );
};

export default FileUpload;
