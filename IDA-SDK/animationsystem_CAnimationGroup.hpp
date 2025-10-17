#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animationsystem_CAnimKeyData.hpp"

class animationsystem_CAnimationGroup {
    char vTable427[0x10];
    uint32_t m_nFlags;
    char pad_428[0x4];
    CBufferString m_name;
    char pad_429[0x38];
    char m_localHAnimArray_Handle[0x18];
    char m_includedGroupArray_Handle[0x18];
    char m_directHSeqGroup_Handle[0x8];
    animationsystem_CAnimKeyData m_decodeKey;
    char m_szScripts[0x18];
    char m_AdditionalExtRefs[0x18];
    char end_pad_430[0x8];
};
