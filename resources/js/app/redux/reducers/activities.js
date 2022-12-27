import {
    ACTIVITIES,
    ACTIVITIES_LIST,
    ACTIVITIES_ADDITIONAL_DATA,
    ACTIVITIES_ADD_EDIT,
    ACTIVITIES_DELETE,
    ACTIVITIES_YEARS_SELECT_DATA,
    ACTIVITIES_DOCUMENTS,
    ACTIVITIES_DOCUMENT_UPLOAD,
    ACTIVITIES_DOCUMENT_DELETE,
    ACTIVITIES_STATUS_CHANGE,
    ACTIVITIES_SINGLE,
    ACTIVITIES_INDICATORS_ADD,
    ACTIVITIES_INDICATORS_EDIT,
    ACTIVITIES_EVIDENCES_ADD_EDIT,
    ACTIVITIES_INDICATORS_EVIDENCES,
    ACTIVITIES_INDICATORS_EVIDENCES_DELETE,
    ACTIVITIES_COMMENT,
    ACTIVITIES_COMMENT_FILE_DELETE
} from "../actions/types";
import convertValidations from "@/helpers/convertValidations";
import { createRow } from "@/pages/Activities/tableDataHelpers";
import * as c from "@/constants";
import toString from "lodash/toString";

const initialState = {
    loading: true,
    data: null,
    totalPages: 1,
    single: null,
    singleLoading: true,
    requesting: false,
    validations: {},
    deleting: false,
    additionalData: null,
    additionalDataLoading: true,
    yearsSelectData: null,
    yearsSelectDataLoading: true,
    documents: null,
    documentsLoading: true,
    documentUploadRequesting: false,
    documentDeleteRequesting: false,
    indicatorsAddRequesting: false,
    indicatorsAddValidations: false,
    indicatorsEditRequesting: false,
    indicatorsEditValidations: false,
    evidencesRequesting: false,
    evidencesValidations: false,
    indicatorsEvidencesDeleting: false,
    commentRequesting: false,
    commentFileDelete: false,
    statusRequesting: false // may be a string also!
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ACTIVITIES_LIST.LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case ACTIVITIES_LIST.SUCCESS: {
            if (
                payload &&
                payload.data &&
                payload.data.data &&
                payload.data.data.length > 0
            ) {
                return {
                    ...state,
                    loading: false,
                    data: payload.data.data.map(
                        el =>
                            createRow({
                                id: el[c.id],
                                job_id: el[c.main_user_id][c.id],
                                comment: toString(el[c.comment]),
                                comment_media: el[c.comment_media],
                                is_mine: el[c.is_mine],
                                moved: el[c.moved],
                                editable: el[c.editable],
                                status: el[c.status],
                                status_author: el[c.status_of_author],
                                activity: el[c.name],
                                department: el[c.main_user_id][c.job_name],
                                period: el[c.months_text]
                            }) // note in redux dev tools you won't see any functions created
                    ),
                    totalPages: payload.data[c.total_pages]
                };
            }
            if (payload && payload.data && payload.data[c.total_pages]) {
                return {
                    ...state,
                    loading: false,
                    data: null,
                    totalPages: payload.data[c.total_pages]
                };
            }
            return {
                ...state,
                loading: false,
                data: null,
                totalPages: 1
            };
        }
        case ACTIVITIES_LIST.ERROR: {
            return {
                ...state,
                loading: false,
                data: null,
                totalPages: 1
            };
        }

        case ACTIVITIES_SINGLE.LOADING: {
            return {
                ...state,
                singleLoading: true
            };
        }
        case ACTIVITIES_SINGLE.SUCCESS: {
            return {
                ...state,
                singleLoading: false,
                single: payload
            };
        }
        case ACTIVITIES_SINGLE.ERROR: {
            return {
                ...state,
                singleLoading: false,
                single: null
            };
        }
        case ACTIVITIES_SINGLE.RESET: {
            return {
                ...state,
                singleLoading: true,
                single: null
            };
        }

        case ACTIVITIES_ADDITIONAL_DATA.LOADING: {
            return {
                ...state,
                additionalDataLoading: true
            };
        }
        case ACTIVITIES_ADDITIONAL_DATA.SUCCESS: {
            return {
                ...state,
                additionalDataLoading: false,
                additionalData: payload
            };
        }
        case ACTIVITIES_ADDITIONAL_DATA.ERROR: {
            return {
                ...state,
                additionalDataLoading: false,
                additionalData: null
            };
        }

        case ACTIVITIES_ADD_EDIT.REQUESTING: {
            return {
                ...state,
                requesting: true,
                validations: {}
            };
        }
        case ACTIVITIES_ADD_EDIT.SUCCESS: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case ACTIVITIES_ADD_EDIT.ERROR: {
            if (payload && payload.validations) {
                return {
                    ...state,
                    requesting: false,
                    validations: convertValidations(payload.validations)
                };
            }
            return {
                ...state,
                requesting: false
            };
        }
        case ACTIVITIES_ADD_EDIT.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.validations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, validations: updatedValidations };
        }
        case ACTIVITIES_ADD_EDIT.RESET: {
            return {
                ...state,
                requesting: false,
                validations: {},
                indicatorsAddRequesting: false,
                indicatorsAddValidations: {},
                indicatorsEditRequesting: false,
                indicatorsEditValidations: {},
                evidencesRequesting: false,
                evidencesValidations: {},
                indicatorsEvidencesDeleting: false
            };
        }

        case ACTIVITIES_STATUS_CHANGE.REQUESTING: {
            return {
                ...state,
                statusRequesting: action.decision || true,
                validations: {}
            };
        }
        case ACTIVITIES_STATUS_CHANGE.SUCCESS: {
            return {
                ...state,
                statusRequesting: false,
                validations: {}
            };
        }
        case ACTIVITIES_STATUS_CHANGE.ERROR: {
            if (payload && payload.validations) {
                return {
                    ...state,
                    statusRequesting: false,
                    validations: convertValidations(payload.validations)
                };
            }
            return {
                ...state,
                statusRequesting: false
            };
        }
        case ACTIVITIES_STATUS_CHANGE.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.validations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, validations: updatedValidations };
        }
        case ACTIVITIES_STATUS_CHANGE.RESET: {
            return {
                ...state,
                statusRequesting: false,
                validations: {}
            };
        }

        // INDICATORS ADD
        // INDICATORS ADD

        case ACTIVITIES_INDICATORS_ADD.REQUESTING: {
            return {
                ...state,
                indicatorsAddRequesting: true,
                indicatorsAddValidations: {}
            };
        }
        case ACTIVITIES_INDICATORS_ADD.SUCCESS: {
            return {
                ...state,
                indicatorsAddRequesting: false,
                indicatorsAddValidations: {}
            };
        }
        case ACTIVITIES_INDICATORS_ADD.ERROR: {
            if (payload && payload.validations) {
                return {
                    ...state,
                    indicatorsAddRequesting: false,
                    indicatorsAddValidations: convertValidations(
                        payload.validations
                    )
                };
            }
            return {
                ...state,
                indicatorsAddRequesting: false
            };
        }
        case ACTIVITIES_INDICATORS_ADD.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.indicatorsAddValidations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, indicatorsAddValidations: updatedValidations };
        }

        // INDICATORS EDIT
        // INDICATORS EDIT

        case ACTIVITIES_INDICATORS_EDIT.REQUESTING: {
            return {
                ...state,
                indicatorsEditRequesting: true,
                indicatorsEditValidations: {}
            };
        }
        case ACTIVITIES_INDICATORS_EDIT.SUCCESS: {
            return {
                ...state,
                indicatorsEditRequesting: false,
                indicatorsEditValidations: {}
            };
        }
        case ACTIVITIES_INDICATORS_EDIT.ERROR: {
            if (payload && payload.validations) {
                return {
                    ...state,
                    indicatorsEditRequesting: false,
                    indicatorsEditValidations: convertValidations(
                        payload.validations
                    )
                };
            }
            return {
                ...state,
                indicatorsEditRequesting: false
            };
        }
        case ACTIVITIES_INDICATORS_EDIT.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.indicatorsEditValidations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, indicatorsEditValidations: updatedValidations };
        }
        case ACTIVITIES_INDICATORS_EDIT.RESET: {
            return {
                ...state,
                indicatorsEditRequesting: false,
                indicatorsEditValidations: {}
            };
        }

        // EVIDENCES
        // EVIDENCES

        case ACTIVITIES_EVIDENCES_ADD_EDIT.REQUESTING: {
            return {
                ...state,
                evidencesRequesting: true,
                evidencesValidations: {}
            };
        }
        case ACTIVITIES_EVIDENCES_ADD_EDIT.SUCCESS: {
            return {
                ...state,
                evidencesRequesting: false,
                evidencesValidations: {}
            };
        }
        case ACTIVITIES_EVIDENCES_ADD_EDIT.ERROR: {
            if (payload && payload.validations) {
                return {
                    ...state,
                    evidencesRequesting: false,
                    evidencesValidations: convertValidations(
                        payload.validations
                    )
                };
            }
            return {
                ...state,
                evidencesRequesting: false
            };
        }
        case ACTIVITIES_EVIDENCES_ADD_EDIT.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.evidencesValidations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, evidencesValidations: updatedValidations };
        }
        case ACTIVITIES_EVIDENCES_ADD_EDIT.RESET: {
            return {
                ...state,
                evidencesRequesting: false,
                evidencesValidations: {}
            };
        }

        case ACTIVITIES_INDICATORS_EVIDENCES.RESET: {
            return {
                ...state,
                indicatorsEditRequesting: false,
                indicatorsEditValidations: {},
                evidencesRequesting: false,
                evidencesValidations: {}
            };
        }

        case ACTIVITIES_INDICATORS_EVIDENCES_DELETE.REQUESTING: {
            return {
                ...state,
                indicatorsEvidencesDeleting: true
            };
        }
        case ACTIVITIES_INDICATORS_EVIDENCES_DELETE.SUCCESS:
        case ACTIVITIES_INDICATORS_EVIDENCES_DELETE.ERROR:
        case ACTIVITIES_INDICATORS_EVIDENCES_DELETE.RESET: {
            return {
                ...state,
                indicatorsEvidencesDeleting: false
            };
        }

        case ACTIVITIES_DELETE.REQUESTING: {
            return {
                ...state,
                deleting: true
            };
        }
        case ACTIVITIES_DELETE.SUCCESS:
        case ACTIVITIES_DELETE.ERROR: {
            return {
                ...state,
                deleting: false
            };
        }

        case ACTIVITIES_YEARS_SELECT_DATA.LOADING: {
            return {
                ...state,
                yearsSelectDataLoading: true
            };
        }
        case ACTIVITIES_YEARS_SELECT_DATA.SUCCESS: {
            return {
                ...state,
                yearsSelectDataLoading: false,
                yearsSelectData: payload
            };
        }
        case ACTIVITIES_YEARS_SELECT_DATA.ERROR: {
            return {
                ...state,
                yearsSelectDataLoading: false,
                yearsSelectData: null
            };
        }

        case ACTIVITIES_DOCUMENTS.LOADING: {
            return {
                ...state,
                documentsLoading: true
            };
        }
        case ACTIVITIES_DOCUMENTS.SUCCESS: {
            return {
                ...state,
                documentsLoading: false,
                documents: payload[c.files]
            };
        }
        case ACTIVITIES_DOCUMENTS.ERROR: {
            return {
                ...state,
                documentsLoading: false,
                documents: null
            };
        }
        case ACTIVITIES_DOCUMENTS.RESET: {
            return {
                ...state,
                documentsLoading: false,
                documents: null,
                validations: {}
            };
        }

        case ACTIVITIES_DOCUMENT_UPLOAD.REQUESTING: {
            return {
                ...state,
                documentUploadRequesting: true,
                validations: {}
            };
        }
        case ACTIVITIES_DOCUMENT_UPLOAD.SUCCESS: {
            return {
                ...state,
                documentUploadRequesting: false,
                validations: {}
            };
        }
        case ACTIVITIES_DOCUMENT_UPLOAD.ERROR: {
            if (payload && payload.validations) {
                return {
                    ...state,
                    documentUploadRequesting: false,
                    validations: convertValidations(payload.validations)
                };
            }
            return {
                ...state,
                documentUploadRequesting: false
            };
        }
        case ACTIVITIES_DOCUMENT_UPLOAD.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.validations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, validations: updatedValidations };
        }
        case ACTIVITIES_DOCUMENT_UPLOAD.RESET: {
            return {
                ...state,
                documentUploadRequesting: false,
                validations: {}
            };
        }

        case ACTIVITIES_COMMENT.REQUESTING: {
            return {
                ...state,
                commentRequesting: true,
                validations: {}
            };
        }
        case ACTIVITIES_COMMENT.SUCCESS: {
            return {
                ...state,
                commentRequesting: false,
                validations: {}
            };
        }
        case ACTIVITIES_COMMENT.ERROR: {
            if (payload && payload.validations) {
                return {
                    ...state,
                    commentRequesting: false,
                    validations: convertValidations(payload.validations)
                };
            }
            return {
                ...state,
                commentRequesting: false
            };
        }
        case ACTIVITIES_COMMENT.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.validations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, validations: updatedValidations };
        }
        case ACTIVITIES_COMMENT.RESET: {
            return {
                ...state,
                commentRequesting: false,
                validations: {}
            };
        }

        case ACTIVITIES_COMMENT_FILE_DELETE.REQUESTING: {
            return {
                ...state,
                commentFileDelete: true
            };
        }

        case ACTIVITIES_COMMENT_FILE_DELETE.SUCCESS:
        case ACTIVITIES_COMMENT_FILE_DELETE.ERROR:
        case ACTIVITIES_COMMENT_FILE_DELETE.RESET: {
            return {
                ...state,
                commentFileDelete: false
            };
        }

        case ACTIVITIES_DOCUMENT_DELETE.REQUESTING: {
            return {
                ...state,
                documentDeleteRequesting: true
            };
        }
        case ACTIVITIES_DOCUMENT_DELETE.SUCCESS:
        case ACTIVITIES_DOCUMENT_DELETE.ERROR: {
            return {
                ...state,
                documentDeleteRequesting: false
            };
        }

        case ACTIVITIES.RESET: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
}
