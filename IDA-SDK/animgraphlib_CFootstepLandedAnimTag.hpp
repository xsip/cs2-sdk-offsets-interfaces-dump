#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimTagID.hpp"

class animgraphlib_CFootstepLandedAnimTag {
    char vTable53[0x18];
    CGlobalSymbol m_name;
    CUtlString m_sComment;
    CGlobalSymbol m_group;
    modellib_AnimTagID m_tagID;
    char pad_54[0x14];
    bool m_bIsReferenced;
    char end_pad_55[0x7];
    char vTable149[0x8];
    animgraphlib_FootstepLandedFootSoundType_t m_FootstepType;
    char pad_150[0x4];
    CUtlString m_OverrideSoundName;
    CUtlString m_DebugAnimSourceString;
    CUtlString m_BoneName;
};
