#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimComponentID.hpp"

class animgraphlib_CRagdollComponentUpdater {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    CUtlString m_name;
    modellib_AnimComponentID m_id;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    bool m_bStartEnabled;
    char end_pad_11[0x7];
    char m_ragdollNodePaths[0x18];
    char m_followAttachmentNodePaths[0x18];
    char m_boneIndices[0x18];
    char m_boneNames[0x18];
    char m_weightLists[0x18];
    char m_boneToWeightIndices[0x18];
    float32 m_flSpringFrequencyMin;
    float32 m_flSpringFrequencyMax;
    float32 m_flMaxStretch;
    bool m_bSolidCollisionAtZeroWeight;
    char end_pad_214[0xb];
};
