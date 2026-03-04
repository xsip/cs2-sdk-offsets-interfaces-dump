// generated - do not edit!

import {server_CLogicalEntity} from './CLogicalEntity';
// Class size: 0x590
// BaseClass: : public CS2::server::CLogicalEntity
export const server_CLogicBranchList  = {
	...server_CLogicalEntity,
	m_nLogicBranchNames: 1192n, // GlobalTypes::CUtlSymbolLarge[16]  | Schema_FixedArray | Size: 0x80
	m_LogicBranchList: 1320n, // server::CUtlVector<GlobalTypes::CHandle<server::CBaseEntity>>  | Schema_Atomic | Size: 0x18
	m_eLastState: 1344n, // server::CLogicBranchList::LogicBranchListenerLastState_t  | Schema_DeclaredEnum | Size: 0x4
	m_OnAllTrue: 1352n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnAllFalse: 1376n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnMixed: 1400n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
}
