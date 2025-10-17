#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CSeqBoneMaskList {
    CBufferString m_sName;
    char m_nLocalBoneArray[0x18];
    char m_flBoneWeightArray[0x18];
    float32 m_flDefaultMorphCtrlWeight;
    char pad_435[0x4];
    char m_morphCtrlWeightArray[0x18];
};
