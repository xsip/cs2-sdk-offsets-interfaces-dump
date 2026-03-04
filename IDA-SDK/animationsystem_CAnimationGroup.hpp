#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animationsystem_CAnimKeyData.hpp"

class animationsystem_CAnimationGroup {
    void **__vftable_0;
    void **__vftable_1;
    uint32_t m_nFlags;
    char pad_434[0x4];
    CBufferString m_name;
    char pad_435[0x38];
    char m_localHAnimArray_Handle[0x18];
    char m_includedGroupArray_Handle[0x18];
    char m_directHSeqGroup_Handle[0x8];
    animationsystem_CAnimKeyData m_decodeKey;
    char m_szScripts[0x18];
    char m_AdditionalExtRefs[0x18];
    char end_pad_436[0x8];
};
