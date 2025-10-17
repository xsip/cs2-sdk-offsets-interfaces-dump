#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CSeqScaleSet {
    CBufferString m_sName;
    bool m_bRootOffset;
    char pad_449[0x3];
    Vector m_vRootOffset;
    char m_nLocalBoneArray[0x18];
    char m_flBoneScaleArray[0x18];
};
