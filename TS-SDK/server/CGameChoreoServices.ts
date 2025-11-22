// generated - do not edit!

import {client_IChoreoServices} from '../client/IChoreoServices';
// Class size: 0x20
// BaseClass: : public CS2::client::IChoreoServices
export const server_CGameChoreoServices  = {
	...client_IChoreoServices,
	m_hOwner: 8n, // GlobalTypes::CHandle<server::CBaseAnimGraph>  | Schema_Atomic | Size: 0x4
	m_hScriptedSequence: 12n, // GlobalTypes::CHandle<server::CScriptedSequence>  | Schema_Atomic | Size: 0x4
	m_scriptState: 16n, // client::IChoreoServices::ScriptState_t  | Schema_DeclaredEnum | Size: 0x4
	m_choreoState: 20n, // client::IChoreoServices::ChoreoState_t  | Schema_DeclaredEnum | Size: 0x4
	m_flTimeStartedState: 24n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
