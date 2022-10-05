import Link from "next/link";
import React from "react";

export default function RecipeCard({ recipe }) {
    
    const { title, slug } = recipe.fields;
    
    
    return (
        <div className="card">
            <div className="content">
                <div className="actions">
                    <Link href={ '/recipes/' + slug }><a><h4>{ title }</h4></a></Link>
                </div>
            </div>
        </div>
    )
}