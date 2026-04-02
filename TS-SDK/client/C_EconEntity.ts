// generated - do not edit!

import {client_C_BaseFlex} from './C_BaseFlex';
// Class size: 0x18C0
// BaseClass: : public CS2::client::C_BaseFlex
export const client_C_EconEntity  = {
	...client_C_BaseFlex,
	m_flFlexDelayTime: 4960n, // float32 m_flFlexDelayTime; |  0x1360 | Schema_Builtin | Size: 0x4
	m_flFlexDelayedWeight: 4968n, // float32* m_flFlexDelayedWeight; |  0x1368 | Schema_Ptr | Size: 0x8
	m_bAttributesInitialized: 4976n, // bool m_bAttributesInitialized; |  0x1370 | Schema_Builtin | Size: 0x1
	m_AttributeManager: 4984n, // client::C_AttributeContainer  | Schema_DeclaredClass | Size: 0x4d0
	m_OriginalOwnerXuidLow: 6216n, // uint32_t m_OriginalOwnerXuidLow; |  0x1848 | Schema_Builtin | Size: 0x4
	m_OriginalOwnerXuidHigh: 6220n, // uint32_t m_OriginalOwnerXuidHigh; |  0x184c | Schema_Builtin | Size: 0x4
	m_nFallbackPaintKit: 6224n, // int32_t m_nFallbackPaintKit; |  0x1850 | Schema_Builtin | Size: 0x4
	m_nFallbackSeed: 6228n, // int32_t m_nFallbackSeed; |  0x1854 | Schema_Builtin | Size: 0x4
	m_flFallbackWear: 6232n, // float32 m_flFallbackWear; |  0x1858 | Schema_Builtin | Size: 0x4
	m_nFallbackStatTrak: 6236n, // int32_t m_nFallbackStatTrak; |  0x185c | Schema_Builtin | Size: 0x4
	m_bClientside: 6240n, // bool m_bClientside; |  0x1860 | Schema_Builtin | Size: 0x1
	m_bParticleSystemsCreated: 6241n, // bool m_bParticleSystemsCreated; |  0x1861 | Schema_Builtin | Size: 0x1
	m_vecAttachedParticles: 6248n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_hViewmodelAttachment: 6272n, // GlobalTypes::CHandle<client::CBaseAnimGraph>  | Schema_Atomic | Size: 0x4
	m_iOldTeam: 6276n, // int32_t m_iOldTeam; |  0x1884 | Schema_Builtin | Size: 0x4
	m_bAttachmentDirty: 6280n, // bool m_bAttachmentDirty; |  0x1888 | Schema_Builtin | Size: 0x1
	m_nUnloadedModelIndex: 6284n, // int32_t m_nUnloadedModelIndex; |  0x188c | Schema_Builtin | Size: 0x4
	m_iNumOwnerValidationRetries: 6288n, // int32_t m_iNumOwnerValidationRetries; |  0x1890 | Schema_Builtin | Size: 0x4
	m_hOldProvidee: 6304n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_vecAttachedModels: 6312n, // GlobalTypes::CUtlVector<client::C_EconEntity_AttachedModelData_t>  | Schema_Atomic | Size: 0x18
}
