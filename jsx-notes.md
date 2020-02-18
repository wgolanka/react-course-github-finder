####Differences between jsx and html and jsx overall

`className` is used instead of `class`

`htmlFor` instead of `for`

---

*Only one div - and all elements must be inside parent.*

---

If I don't want to use div like below

    <div className="App">
        <h1> hello from react</h1>
     </div>

I need to use React.Fragment

    <React.Fragment>
        <h1> hello from react</h1>
    </React.Fragment>

Or simply use empty angle brackets ( but React.Fragment is recommended)

    <>
        <h1> hello from react</h1>
    </>
