// generated - do not edit!

import {animgraphlib_CAnimUpdateNodeBase} from './CAnimUpdateNodeBase';
// Class size: 0xB8
// BaseClass: : public CS2::animgraphlib::CAnimUpdateNodeBase
export const animgraphlib_CSelectorUpdateNode  = {
	...animgraphlib_CAnimUpdateNodeBase,
	m_children: 96n, // GlobalTypes::CUtlVector<animgraphlib::CAnimUpdateNodeRef>  | Schema_Atomic | Size: 0x18
	m_tags: 120n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_blendCurve: 148n, // animgraphlib::CBlendCurve  | Schema_DeclaredClass | Size: 0x8
	m_flBlendTime: 156n, // GlobalTypes::CAnimValue  | Schema_Atomic | Size: 0x8
	m_hParameter: 164n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_nTagIndex: 168n, // int32_t m_nTagIndex; |  0xa8 | Schema_Builtin | Size: 0x4
	m_eTagBehavior: 172n, // animgraphlib::SelectorTagBehavior_t  | Schema_DeclaredEnum | Size: 0x4
	m_bResetOnChange: 176n, // bool m_bResetOnChange; |  0xb0 | Schema_Builtin | Size: 0x1
	m_bLockWhenWaning: 177n, // bool m_bLockWhenWaning; |  0xb1 | Schema_Builtin | Size: 0x1
	m_bSyncCyclesOnChange: 178n, // bool m_bSyncCyclesOnChange; |  0xb2 | Schema_Builtin | Size: 0x1
}
