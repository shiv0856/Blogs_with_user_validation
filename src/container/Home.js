import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Home() {
    const findPublishedBlogs = () => {
        if (localStorage.getItem('blogs') !== null) {
            let temp = JSON.parse(localStorage.getItem('blogs'))
            return temp.filter(e => e.published !== "")
        }else {
            return [];
        }
    }
    const [blogs, setBlogs] = useState(findPublishedBlogs());
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>DOC</th>
                        <th>DOP</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{blog.title}</td>
                            <td>{blog.author}</td>
                            <td>{blog.createdOn}</td>
                            <td>{blog.published}</td>
                            <td>
                                <Button variant="primary" as={Link} to={"/view/" + blog.id} >View</Button>{' '}
                                
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
