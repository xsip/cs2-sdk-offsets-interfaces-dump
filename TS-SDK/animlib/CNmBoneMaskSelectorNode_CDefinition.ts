// generated - do not edit!

import {animlib_CNmBoneMaskValueNode_CDefinition} from './CNmBoneMaskValueNode_CDefinition';
// Class size: 0x98
// BaseClass: : public CS2::animlib::CNmBoneMaskValueNode_CDefinition
export const animlib_CNmBoneMaskSelectorNode_CDefinition  = {
	...animlib_CNmBoneMaskValueNode_CDefinition,
	m_defaultMaskNodeIdx: 16n, // int16_t m_defaultMaskNodeIdx; |  0x10 | Schema_Builtin | Size: 0x2
	m_parameterValueNodeIdx: 18n, // int16_t m_parameterValueNodeIdx; |  0x12 | Schema_Builtin | Size: 0x2
	m_bSwitchDynamically: 20n, // bool m_bSwitchDynamically; |  0x14 | Schema_Builtin | Size: 0x1
	m_maskNodeIndices: 24n, // GlobalTypes::CUtlVectorFixedGrowable  | Schema_Atomic | Size: 0x28
	m_parameterValues: 64n, // GlobalTypes::CUtlVectorFixedGrowable<GlobalTypes::CGlobalSymbol>  | Schema_Atomic | Size: 0x50
	m_flBlendTimeSeconds: 144n, // float32 m_flBlendTimeSeconds; |  0x90 | Schema_Builtin | Size: 0x4
}
