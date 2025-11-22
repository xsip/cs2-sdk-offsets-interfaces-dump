// generated - do not edit!

import {client_CSkeletonAnimationController} from './CSkeletonAnimationController';
// Class size: 0x1A90
// BaseClass: : public CS2::client::CSkeletonAnimationController
export const client_CBaseAnimGraphController  = {
	...client_CSkeletonAnimationController,
	m_animGraphNetworkedVars: 24n, // client::CAnimGraphNetworkedVariables  | Schema_DeclaredClass | Size: 0x1490
	m_bSequenceFinished: 5288n, // bool m_bSequenceFinished; |  0x14a8 | Schema_Builtin | Size: 0x1
	m_flSoundSyncTime: 5292n, // float32 m_flSoundSyncTime; |  0x14ac | Schema_Builtin | Size: 0x4
	m_nActiveIKChainMask: 5296n, // uint32_t m_nActiveIKChainMask; |  0x14b0 | Schema_Builtin | Size: 0x4
	m_hSequence: 5300n, // animationsystem::HSequence  | Schema_DeclaredClass | Size: 0x4
	m_flSeqStartTime: 5304n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flSeqFixedCycle: 5308n, // float32 m_flSeqFixedCycle; |  0x14bc | Schema_Builtin | Size: 0x4
	m_nAnimLoopMode: 5312n, // client::AnimLoopMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_flPlaybackRate: 5316n, // GlobalTypes::CNetworkedQuantizedFloat  | Schema_Atomic | Size: 0x8
	m_nNotifyState: 5328n, // client::SequenceFinishNotifyState_t  | Schema_DeclaredEnum | Size: 0x1
	m_bNetworkedAnimationInputsChanged: 5330n, // bool m_bNetworkedAnimationInputsChanged; |  0x14d2 | Schema_Builtin | Size: 0x1
	m_bNetworkedSequenceChanged: 5331n, // bool m_bNetworkedSequenceChanged; |  0x14d3 | Schema_Builtin | Size: 0x1
	m_bLastUpdateSkipped: 5332n, // bool m_bLastUpdateSkipped; |  0x14d4 | Schema_Builtin | Size: 0x1
	m_flPrevAnimUpdateTime: 5336n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hGraphDefinitionAG2: 6240n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCNmGraphDefinition>  | Schema_Atomic | Size: 0x8
	m_bIsUsingAG2: 6248n, // bool m_bIsUsingAG2; |  0x1868 | Schema_Builtin | Size: 0x1
	m_serializedPoseRecipeAG2: 6256n, // GlobalTypes::C_NetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_nSerializePoseRecipeSizeAG2: 6280n, // int32_t m_nSerializePoseRecipeSizeAG2; |  0x1888 | Schema_Builtin | Size: 0x4
	m_nSerializePoseRecipeVersionAG2: 6284n, // int32_t m_nSerializePoseRecipeVersionAG2; |  0x188c | Schema_Builtin | Size: 0x4
	m_nGraphCreationFlagsAG2: 6288n, // uint8_t m_nGraphCreationFlagsAG2; |  0x1890 | Schema_Builtin | Size: 0x1
	m_nServerGraphDefReloadCountAG2: 6780n, // int32_t m_nServerGraphDefReloadCountAG2; |  0x1a7c | Schema_Builtin | Size: 0x4
	m_nServerSerializationContextIteration: 6788n, // int32_t m_nServerSerializationContextIteration; |  0x1a84 | Schema_Builtin | Size: 0x4
}
