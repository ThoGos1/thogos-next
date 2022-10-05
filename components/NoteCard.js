import Link from "next/link";
import React from "react";

export default function NoteCard({ note }) {
    
    const { title, slug } = note.fields;
    
    
    return (
        <div className="card">
            <div className="content">
                <div className="actions">
                    <Link href={ '/notes/' + slug }><a><h4>{ title }</h4></a></Link>
                </div>
            </div>
        </div>
    )
}