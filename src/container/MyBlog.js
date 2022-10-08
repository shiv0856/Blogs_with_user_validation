import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function MyBlog() {
    const user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : false
    const findPublishedBlogs = () => {
        if (localStorage.getItem('blogs') !== null) {
            let temp = JSON.parse(localStorage.getItem('blogs'))
            return temp.filter(e => e.userId === user.id)
        }
        else {
            return [];
        }
    }
    const [blogs, setBlogs] = useState(findPublishedBlogs());
    const handleDelete = (id) => {
        let temp = blogs.filter((e) => {
            return e.id !== id;
        })
        localStorage.setItem('blogs', JSON.stringify(temp));
        setBlogs(temp);
    }
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
                                <Button variant="success" as={Link} to={"/update/" + blog.id} >Update</Button>{' '}
                                <Button variant="danger" onClick={() => handleDelete(blog.id)}>Delete</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
