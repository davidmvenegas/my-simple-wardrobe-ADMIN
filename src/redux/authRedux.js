import { generalRequest, userRequest } from "../request"
import { loginSuccess, loginStart, loginFailure } from "./userRedux"
import { deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductStart, updateProductSuccess, updateProductFailure, addProductStart, addProductSuccess, addProductFailure } from "./productRedux"
import { getMemberStart, getMemberSuccess, getMemberFailure, deleteMemberStart, deleteMemberSuccess, deleteMemberFailure, updateMemberStart, updateMemberSuccess, updateMemberFailure, addMemberStart, addMemberSuccess, addMemberFailure } from "./memberRedux"

// LOGIN
async function loginRequest(dispatch, user) {
    dispatch(loginStart())
    try {
        const response = await generalRequest.post("auth/login", user)
        dispatch(loginSuccess(response.data))
    } catch (error) {
        dispatch(loginFailure())
        console.error(error)
    }
}

// PRODUCTS
async function getProducts(dispatch) {
    dispatch(getProductStart())
    try {
        const response = await generalRequest.get("products")
        dispatch(getProductSuccess(response.data))
    } catch (error) {
        dispatch(getProductFailure())
        console.error(error)
    }
}
async function deleteProducts(id, dispatch) {
    dispatch(deleteProductStart())
    try {
        const response = await userRequest.delete(`products/${id}`)
        dispatch(deleteProductSuccess(response.data))
    } catch (error) {
        dispatch(deleteProductFailure())
        console.error(error)
    }
}
// async function updateProduct(id, product, dispatch) {
//     dispatch(updateProductStart())
//     try {
//         dispatch(updateProductSuccess({id, product}))
//     } catch (error) {
//         dispatch(updateProductFailure())
//     }
// }
async function addProduct(product, dispatch) {
    dispatch(addProductStart())
    try {
        const res = await userRequest.post(`/products`, product)
        dispatch(addProductSuccess(res.data))
    } catch (error) {
        dispatch(addProductFailure())
    }
}

// MEMBERS
async function getMembers(dispatch) {
    dispatch(getMemberStart())
    try {
        const response = await generalRequest.get("users")
        dispatch(getMemberSuccess(response.data))
    } catch (error) {
        dispatch(getMemberFailure())
        console.error(error)
    }
}
async function deleteMembers(id, dispatch) {
    dispatch(deleteMemberStart())
    try {
        const response = await userRequest.delete(`users/${id}`)
        dispatch(deleteMemberSuccess(response.data))
    } catch (error) {
        dispatch(deleteMemberFailure())
        console.error(error)
    }
}
// async function updateMember(id, member, dispatch) {
//     dispatch(updateMemberStart())
//     try {
//         dispatch(updateMemberSuccess({id, member}))
//     } catch (error) {
//         dispatch(updateMemberFailure())
//     }
// }
async function addMember(member, dispatch) {
    dispatch(addMemberStart())
    try {
        const res = await userRequest.post(`/auth/register`, member)
        dispatch(addMemberSuccess(res.data))
    } catch (error) {
        dispatch(addMemberFailure())
    }
}

export { loginRequest, getProducts, deleteProducts, addProduct, getMembers, deleteMembers, addMember }