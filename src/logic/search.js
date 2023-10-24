import React from 'react';

const jsonData = require('./solutions.json');

function searchQuestion(query, data) {
    const results = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].question.toLowerCase().includes(query.toLowerCase())) {
            results.push(data[i]);
        }
    }
    return results;
}

export function findSolution(query) {
    const searchResults = searchQuestion(query, jsonData);
    if(query == '') {
        return null
    }
    if (searchResults.length > 0) {
        console.log(query)
        return searchResults.map((result, index) => (
            <div key={index}>
                <div
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Answer{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        {result.answer}
                    </p>
                </div>
            </div>
        ));
    } else {
        return <div>Error</div>;
        // Handle the error condition here
    }
}
