// generated - do not edit!

import {client_IEconItemInterface} from '../client/IEconItemInterface';
// Class size: 0x2A8
// BaseClass: : public CS2::client::IEconItemInterface
export const server_CEconItemView  = {
	...client_IEconItemInterface,
	m_iItemDefinitionIndex: 56n, // uint16_t m_iItemDefinitionIndex; |  0x38 | Schema_Builtin | Size: 0x2
	m_iEntityQuality: 60n, // int32_t m_iEntityQuality; |  0x3c | Schema_Builtin | Size: 0x4
	m_iEntityLevel: 64n, // uint32_t m_iEntityLevel; |  0x40 | Schema_Builtin | Size: 0x4
	m_iItemID: 72n, // uint64_t m_iItemID; |  0x48 | Schema_Builtin | Size: 0x8
	m_iItemIDHigh: 80n, // uint32_t m_iItemIDHigh; |  0x50 | Schema_Builtin | Size: 0x4
	m_iItemIDLow: 84n, // uint32_t m_iItemIDLow; |  0x54 | Schema_Builtin | Size: 0x4
	m_iAccountID: 88n, // uint32_t m_iAccountID; |  0x58 | Schema_Builtin | Size: 0x4
	m_iInventoryPosition: 92n, // uint32_t m_iInventoryPosition; |  0x5c | Schema_Builtin | Size: 0x4
	m_bInitialized: 104n, // bool m_bInitialized; |  0x68 | Schema_Builtin | Size: 0x1
	m_AttributeList: 112n, // server::CAttributeList  | Schema_DeclaredClass | Size: 0x78
	m_NetworkedDynamicAttributes: 232n, // server::CAttributeList  | Schema_DeclaredClass | Size: 0x78
	m_szCustomName: 352n, // char m_szCustomName[161]; |  0x160 | Schema_FixedArray | Size: 0xa1
	m_szCustomNameOverride: 513n, // char m_szCustomNameOverride[161]; |  0x201 | Schema_FixedArray | Size: 0xa1
}
