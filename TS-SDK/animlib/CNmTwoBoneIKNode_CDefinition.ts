// generated - do not edit!

import {animlib_CNmPassthroughNode_CDefinition} from './CNmPassthroughNode_CDefinition';
// Class size: 0x30
// BaseClass: : public CS2::animlib::CNmPassthroughNode_CDefinition
export const animlib_CNmTwoBoneIKNode_CDefinition  = {
	...animlib_CNmPassthroughNode_CDefinition,
	m_effectorBoneID: 24n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
	m_nEffectorTargetNodeIdx: 32n, // int16_t m_nEffectorTargetNodeIdx; |  0x20 | Schema_Builtin | Size: 0x2
	m_nEnabledNodeIdx: 34n, // int16_t m_nEnabledNodeIdx; |  0x22 | Schema_Builtin | Size: 0x2
	m_flBlendTimeSeconds: 36n, // float32 m_flBlendTimeSeconds; |  0x24 | Schema_Builtin | Size: 0x4
	m_blendMode: 40n, // animlib::NmIKBlendMode_t  | Schema_DeclaredEnum | Size: 0x1
	m_bIsTargetInWorldSpace: 41n, // bool m_bIsTargetInWorldSpace; |  0x29 | Schema_Builtin | Size: 0x1
	m_flReferencePoseTwistWeight: 44n, // float32 m_flReferencePoseTwistWeight; |  0x2c | Schema_Builtin | Size: 0x4
}
