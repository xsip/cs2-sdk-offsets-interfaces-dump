// generated - do not edit!

import {animgraphlib_CAnimUpdateNodeBase} from './CAnimUpdateNodeBase';
// Class size: 0xC0
// BaseClass: : public CS2::animgraphlib::CAnimUpdateNodeBase
export const animgraphlib_CChoiceUpdateNode  = {
	...animgraphlib_CAnimUpdateNodeBase,
	m_children: 96n, // GlobalTypes::CUtlVector<animgraphlib::CAnimUpdateNodeRef>  | Schema_Atomic | Size: 0x18
	m_weights: 120n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_blendTimes: 144n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_choiceMethod: 168n, // animgraphlib::ChoiceMethod  | Schema_DeclaredEnum | Size: 0x4
	m_choiceChangeMethod: 172n, // animgraphlib::ChoiceChangeMethod  | Schema_DeclaredEnum | Size: 0x4
	m_blendMethod: 176n, // animgraphlib::ChoiceBlendMethod  | Schema_DeclaredEnum | Size: 0x4
	m_blendTime: 180n, // float32 m_blendTime; |  0xb4 | Schema_Builtin | Size: 0x4
	m_bCrossFade: 184n, // bool m_bCrossFade; |  0xb8 | Schema_Builtin | Size: 0x1
	m_bResetChosen: 185n, // bool m_bResetChosen; |  0xb9 | Schema_Builtin | Size: 0x1
	m_bDontResetSameSelection: 186n, // bool m_bDontResetSameSelection; |  0xba | Schema_Builtin | Size: 0x1
}
