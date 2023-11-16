import css from './Notification.module.css';

export const Notification = ({ message }) => {
    return (
        <div >
            <p className={css.notofocation}>{ message }</p>
        </div>
    )
}