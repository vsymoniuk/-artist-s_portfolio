import M from "materialize-css";

export  function Toast(message) {
    M.toast({html: message})
}
