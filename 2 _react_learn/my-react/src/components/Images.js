import React, { useEffect, useState } from 'react'

export default function Images() {
    const Images = [
        'https://images.unsplash.com/photo-1636224358189-182d4886cf14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
        'https://images.unsplash.com/photo-1636934432265-7b770c648a4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=805&q=80',
        'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=961&q=80',

    ]

    function ShowImage() {
        return Images.map((image) => {
            return (
                <div>
                    <img src={image} alt="error" />
                </div>
            );
        });
    }

    return (
        <section>
            <ShowImage />
        </section>
    )
}