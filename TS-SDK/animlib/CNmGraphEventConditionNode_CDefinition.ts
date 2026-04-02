// generated - do not edit!

import {animlib_CNmBoolValueNode_CDefinition} from './CNmBoolValueNode_CDefinition';
// Class size: 0x80
// BaseClass: : public CS2::animlib::CNmBoolValueNode_CDefinition
export const animlib_CNmGraphEventConditionNode_CDefinition  = {
	...animlib_CNmBoolValueNode_CDefinition,
	m_nSourceStateNodeIdx: 16n, // int16_t m_nSourceStateNodeIdx; |  0x10 | Schema_Builtin | Size: 0x2
	m_eventConditionRules: 20n, // animlib::CNmBitFlags  | Schema_DeclaredClass | Size: 0x4
	m_conditions: 24n, // GlobalTypes::CUtlVectorFixedGrowable<animlib::CNmGraphEventConditionNode_Condition_t>  | Schema_Atomic | Size: 0x68
}
