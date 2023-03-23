import React from "react";

import style from "./Comments.module.scss"

import {CommentLarge} from "./CommentLarge/CommentLarge";

import person from "../../assets/img/person.png"
import {CommentSmall} from "./CommentSmall/CommentSmall";

export const Comments: React.FC = () => {
	return (
		<div className={style.Comments}>
			<h2 className={`${style.Comments__title} title`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
			<div className={style.Comments__large}>
				<CommentLarge img={person}
											text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur\n' +
												' animi  autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi\n' +
												' expedita, provident excepturi officia!\n' +
												' Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?\n'}
											name={'Jane Doe'}/>
			</div>
			<div className={style.Comments__smalls}>
				<div className={style.Comments__small}><CommentSmall img={person}
																														 text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur\n' +
																															 'animi  autem aliquid'}
																														 name={"Jane Doe"}
																														 reverse={true}/>
				</div>
				<div className={style.Comments__small}>
					<CommentSmall img={person}
												text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur\n' +
													'animi  autem aliquid'}
												name={"Jane Doe"}
												reverse={false}/>
				</div>
			</div>
		</div>
	)
}
