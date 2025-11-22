// generated - do not edit!

import {animgraphlib_CAnimUpdateNodeBase} from './CAnimUpdateNodeBase';
// Class size: 0xE0
// BaseClass: : public CS2::animgraphlib::CAnimUpdateNodeBase
export const animgraphlib_CBlendUpdateNode  = {
	...animgraphlib_CAnimUpdateNodeBase,
	m_children: 96n, // GlobalTypes::CUtlVector<animgraphlib::CAnimUpdateNodeRef>  | Schema_Atomic | Size: 0x18
	m_sortedOrder: 120n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_targetValues: 144n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_blendValueSource: 172n, // animgraphlib::AnimValueSource  | Schema_DeclaredEnum | Size: 0x4
	m_eLinearRootMotionBlendMode: 176n, // animgraphlib::LinearRootMotionBlendMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_paramIndex: 180n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_damping: 184n, // animgraphlib::CAnimInputDamping  | Schema_DeclaredClass | Size: 0x18
	m_blendKeyType: 208n, // animgraphlib::BlendKeyType  | Schema_DeclaredEnum | Size: 0x4
	m_bLockBlendOnReset: 212n, // bool m_bLockBlendOnReset; |  0xd4 | Schema_Builtin | Size: 0x1
	m_bSyncCycles: 213n, // bool m_bSyncCycles; |  0xd5 | Schema_Builtin | Size: 0x1
	m_bLoop: 214n, // bool m_bLoop; |  0xd6 | Schema_Builtin | Size: 0x1
	m_bLockWhenWaning: 215n, // bool m_bLockWhenWaning; |  0xd7 | Schema_Builtin | Size: 0x1
	m_bIsAngle: 216n, // bool m_bIsAngle; |  0xd8 | Schema_Builtin | Size: 0x1
}
