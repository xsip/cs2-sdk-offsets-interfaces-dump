#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class client_CSkeletonInstance;
#include "server_CAnimGraphNetworkedVariables.hpp"
#include "animationsystem_HSequence.hpp"
#include "entity2_GameTime_t.hpp"
#include "entity2_GameTime_t.hpp"

class server_CBaseAnimGraphController {
    char pad_782[0x8];
    client_CSkeletonInstance* m_pSkeletonInstance;
    char vTable2997[0x8];
    server_CAnimGraphNetworkedVariables m_animGraphNetworkedVars;
    bool m_bSequenceFinished;
    char pad_2998[0x3];
    float32 m_flSoundSyncTime;
    uint32_t m_nActiveIKChainMask;
    animationsystem_HSequence m_hSequence;
    entity2_GameTime_t m_flSeqStartTime;
    float32 m_flSeqFixedCycle;
    client_AnimLoopMode_t m_nAnimLoopMode;
    CNetworkedQuantizedFloat m_flPlaybackRate;
    char pad_2999[0x4];
    client_SequenceFinishNotifyState_t m_nNotifyState;
    char pad_3000[0x1];
    bool m_bNetworkedAnimationInputsChanged;
    bool m_bNetworkedSequenceChanged;
    bool m_bLastUpdateSkipped;
    char pad_3001[0x3];
    entity2_GameTime_t m_flPrevAnimUpdateTime;
    char pad_3002[0x334];
    char m_hGraphDefinitionAG2[0x8];
    bool m_bIsUsingAG2;
    char pad_3003[0x7];
    char m_serializedPoseRecipeAG2[0x18];
    int32_t m_nSerializePoseRecipeSizeAG2;
    int32_t m_nSerializePoseRecipeVersionAG2;
    uint8_t m_nGraphCreationFlagsAG2;
    char pad_3004[0x1e7];
    int32_t m_nServerGraphDefReloadCountAG2;
    int32_t m_nServerSerializationContextIteration;
    char pad_3005[0x8];
};
