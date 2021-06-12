import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByQuery } from "../../../actions/postAction";
import { approveHost, getHosts } from "../../../api";
import style from "./admin.host.module.css";

function AdminHost() {

    const [hosts, setHosts] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const data = await getHosts({ status: "pending" })
        setHosts(data.hosts)
    }, []);

    // useEffect(() => {
    //     console.log(hosts)
    // }, [hosts])

    const approve = async (id) => {
        approveHost(id)
        setHosts(hosts.filter(host => host._id !== id))
    }

    return (
        <div className={style.userPost}>
            <div className={style.container}>
                <div className={style.header}>
                    <h3>Host Approval</h3>
                </div>
                <div className={style.description}>
                    <table>
                        <tr className={style.title}>
                            <th>Avatar</th>
                            <th>Fullname</th>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Phone number</th>
                            <th>Status</th>
                            <th>Actions</th>
                            <th>Approval</th>
                        </tr>
                        {hosts.map((host, key) => (<tr className={style.itemDetail} key={key}>
                            <td className={style.imgCtn}><img src={host.image} alt="" /></td>
                            <td>{host.fullName}</td>
                            <td>{host.personId}</td>
                            <td>{host.username}</td>
                            <td>{host.phoneNumber}</td>
                            <td className={style.status}>{host.status}</td>
                            <td>
                                <button>
                                    <i className="far fa-trash"></i>
                                </button>
                                <button>
                                    <i className="far fa-eye"></i>
                                </button>
                            </td>
                            <td className={style.acceptbox}>
                                <input type="checkbox" onChange={() => approve(host._id)} />
                            </td>
                        </tr>))}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminHost;