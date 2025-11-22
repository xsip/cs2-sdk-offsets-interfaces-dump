// generated - do not edit!

import {client_C_BaseTrigger} from './C_BaseTrigger';
// Class size: 0x1040
// BaseClass: : public CS2::client::C_BaseTrigger
export const client_C_Precipitation  = {
	...client_C_BaseTrigger,
	m_flDensity: 4080n, // float32 m_flDensity; |  0xff0 | Schema_Builtin | Size: 0x4
	m_flParticleInnerDist: 4096n, // float32 m_flParticleInnerDist; |  0x1000 | Schema_Builtin | Size: 0x4
	m_pParticleDef: 4104n, // char* m_pParticleDef; |  0x1008 | Schema_Ptr | Size: 0x8
	m_tParticlePrecipTraceTimer: 4144n, // GlobalTypes::TimedEvent[1]  | Schema_FixedArray | Size: 0x10
	m_bActiveParticlePrecipEmitter: 4152n, // bool m_bActiveParticlePrecipEmitter[1]; |  0x1038 | Schema_FixedArray | Size: 0x1
	m_bParticlePrecipInitialized: 4153n, // bool m_bParticlePrecipInitialized; |  0x1039 | Schema_Builtin | Size: 0x1
	m_bHasSimulatedSinceLastSceneObjectUpdate: 4154n, // bool m_bHasSimulatedSinceLastSceneObjectUpdate; |  0x103a | Schema_Builtin | Size: 0x1
	m_nAvailableSheetSequencesMaxIndex: 4156n, // int32_t m_nAvailableSheetSequencesMaxIndex; |  0x103c | Schema_Builtin | Size: 0x4
}
