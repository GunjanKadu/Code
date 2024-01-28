import PropTypes from "prop-types"
import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { FaCheck } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"
import FileContext from "../../context/FileContext"

function FileEditor({ editingFileId, setEditingFileId, name }) {
    const [fileName, setFileName] = useState(name || "")
    const { renameFile, openFile } = useContext(FileContext)

    const handleOnChange = (e) => {
        setFileName(e.target.value)
    }

    const handleConfirm = (e) => {
        e.preventDefault()

        if (fileName === "") {
            toast.error("File name cannot be empty")
        } else if (fileName.length > 25) {
            toast.error("File name cannot be longer than 25 characters")
        } else if (fileName === name) {
            toast.error("File name cannot be the same as before")
        } else {
            const isRenamed = renameFile(editingFileId, fileName)
            openFile(editingFileId)
            if (!isRenamed) {
                toast.error("File with same name already exists")
            } else {
                setEditingFileId(null)
            }
        }
    }

    const handleCancel = () => {
        setEditingFileId(null)
    }

    return (
        <div className="rounded-md">
            <form
                onSubmit={handleConfirm}
                className="flex w-full gap-4 px-4 py-2"
            >
                <input
                    type="text"
                    className="w-[80%] flex-grow rounded-sm bg-white px-2 text-base text-black outline-none"
                    autoFocus
                    value={fileName}
                    onChange={handleOnChange}
                />
                <span className="flex gap-4">
                    <button onClick={handleConfirm} type="submit">
                        <FaCheck size={16} />
                    </button>
                    <button onClick={handleCancel} type="reset">
                        <IoClose size={20} />
                    </button>
                </span>
            </form>
        </div>
    )
}

FileEditor.propTypes = {
    editingFileId: PropTypes.string.isRequired,
    setEditingFileId: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default FileEditor
