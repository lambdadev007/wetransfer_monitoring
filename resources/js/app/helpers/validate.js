import Validator from "validatorjs";
import * as c from "@/constants";
import { isdev } from "@/config";

const validationsDisabled = false;

let messages = Validator.getMessages("ka");
messages.same = ":attribute და :same უნდა ემთხვეოდეს ერთმანეთს."; // in ka.js ":same" is ":other" and not working
Validator.setMessages("ka", messages);
Validator.useLang("ka");

const fullName = "სახელი გვარი";
const email = "ელ. ფოსტა";
const phone = "ტელეფონის ნომერი";
const password = "პაროლი";
const goal = "სტრატეგიული მიზანი";
const task = "სტრატეგიული ამოცანა";
const indicator = "ინდიკატორი";
const evidence = "მტკიცებულება";
const department = "სტრუქტურული ერთეული";
const new_password = "ახალი პაროლი";
const new_password_confirmation = "ახალი პაროლის დადასტურება";
const role = "როლი";
const activity = "აქტივობა";
const months = "განხორციელების პერიოდი";
const status = "სტატუსი";
const name = "სახელი";

const createValidation = ({ title, rules, attributeNames } = {}) => payload => {
    if (validationsDisabled) {
        return null;
    }

    const result = new Validator(payload, rules);

    result.setAttributeNames(attributeNames);

    if (result.passes()) {
        return null;
    } else {
        isdev && console.log(`Validations from ${title}`, result.errors.all());
        return result.errors.all();
    }
};

export const validateLogin = createValidation({
    title: "login",
    rules: {
        [c.email]: "required|email",
        [c.password]: "required|min:8"
    },
    attributeNames: {
        [c.email]: email,
        [c.password]: password
    }
});

export const validateLoginPasswordChange = createValidation({
    title: "login password change",
    rules: {
        [c.new_password]: "required|min:8",
        [c.new_password_confirmation]: `required|min:8|same:${c.new_password}`
    },
    attributeNames: {
        [c.new_password]: new_password,
        [c.new_password_confirmation]: new_password_confirmation
    }
});

export const validateGoal = createValidation({
    title: "goal",
    rules: {
        [c.name]: "required"
    },
    attributeNames: {
        [c.name]: goal
    }
});

export const validateTask = createValidation({
    title: "task",
    rules: {
        [c.goal_id]: "required",
        [c.name]: "required"
    },
    attributeNames: {
        [c.goal_id]: goal,
        [c.name]: task
    }
});

export const validateIndicator = createValidation({
    title: "indicator",
    rules: {
        [c.task_id]: "required",
        [c.name]: "required"
    },
    attributeNames: {
        [c.task_id]: task,
        [c.name]: indicator
    }
});

export const validateEvidence = createValidation({
    title: "evidence",
    rules: {
        [c.indicator_id]: "required",
        [c.name]: "required"
    },
    attributeNames: {
        [c.indicator_id]: indicator,
        [c.name]: evidence
    }
});

export const validateDepartment = createValidation({
    title: "department",
    rules: {
        [c.name]: "required"
    },
    attributeNames: {
        [c.name]: department
    }
});

export const validateUser = createValidation({
    title: "user",
    rules: {
        [c.name]: "required",
        [c.email]: "required|email",
        [c.phone]: "required|min:9",
        [c.job_id]: "required",
        [c.password]: "min:8"
    },
    attributeNames: {
        [c.name]: fullName,
        [c.email]: email,
        [c.phone]: phone,
        [c.job_id]: department,
        [c.password]: password
    }
});

export const validateActivityAdmin = createValidation({
    title: "activity admin",
    rules: {
        [c.goal_id]: "required",
        [c.task_id]: "required",
        [c.name]: "required",
        [c.months]: "required",
        [c.main_user_id]: "required"
    },
    attributeNames: {
        [c.goal_id]: goal,
        [c.task_id]: task,
        [c.name]: activity,
        [c.months]: months,
        [c.main_user_id]: department
    }
});

export const validateActivityIndicator = createValidation({
    title: "activity indicator",
    rules: {
        [c.name]: "required"
    },
    attributeNames: {
        [c.name]: indicator
    }
});

export const validateActivityStatusAdmin = createValidation({
    title: "activity status admin",
    rules: {
        [c.status_id]: "required"
    },
    attributeNames: {
        [c.status_id]: status
    }
});

// export const validateActivityStatusSuperAdmin = createValidation({
//     title: "activity status super admin",
//     rules: {
//         [c.main_status_id]: "required"
//     },
//     attributeNames: {
//         [c.main_status_id]: status
//     }
// });

export const validateSettings = createValidation({
    title: "settings",
    rules: {
        [c.name]: "required",
        [c.email]: "email"
    },
    attributeNames: {
        [c.name]: name,
        [c.email]: email
    }
});

export const validateProfile = createValidation({
    title: "profile",
    rules: {
        [c.email]: "required|email",
        [c.phone]: "required|min:9"
    },
    attributeNames: {
        [c.email]: email,
        [c.phone]: phone
    }
});
