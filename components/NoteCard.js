import Link from "next/link";
import React from "react";

export default function NoteCard({ note }) {
    
    const { title, slug } = note.fields;
    
    
    return (
        <div>
            <div>
                <div>
                    <Link href={ '/notes/' + slug }><a><h4>{ title }</h4></a></Link>
                </div>
            </div>
        </div>
    )
}