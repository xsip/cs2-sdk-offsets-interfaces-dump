// generated - do not edit!

import {soundsystem_CSosGroupActionSchema} from './CSosGroupActionSchema';
// Class size: 0x18
// BaseClass: : public CS2::soundsystem::CSosGroupActionSchema
export const soundsystem_CSosGroupActionLimitSchema  = {
	...soundsystem_CSosGroupActionSchema,
	m_nMaxCount: 8n, // int32_t m_nMaxCount; |  0x8 | Schema_Builtin | Size: 0x4
	m_nStopType: 12n, // soundsystem::SosActionStopType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nSortType: 16n, // soundsystem::SosActionLimitSortType_t  | Schema_DeclaredEnum | Size: 0x4
	m_bStopImmediate: 20n, // bool m_bStopImmediate; |  0x14 | Schema_Builtin | Size: 0x1
	m_bCountStopped: 21n, // bool m_bCountStopped; |  0x15 | Schema_Builtin | Size: 0x1
}
