import React from 'react';

export default function QuizPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    return (
        <div>Página Quiz {name}</div>
    )
}