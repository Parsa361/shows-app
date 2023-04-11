import { ref } from "vue"
import axios from 'axios'


export default function () {
    const hasError = ref('')

    const handleError = (error) => {
        if (axios.isCancel(error)) {
            hasError.value = 'Request canceled:' + error.message
        } else if (error.code === 'ECONNABORTED') {
            hasError.value = 'Request timed out:' + error.message
        } else {
            hasError.value = "Request error 404: Search result doesn't match"
        }
    }

    return {
        hasError,
        handleError
    }
}
