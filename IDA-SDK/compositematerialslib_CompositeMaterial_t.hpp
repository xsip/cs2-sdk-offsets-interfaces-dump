#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class compositematerialslib_CompositeMaterial_t {
    void **__vftable_0;
    KeyValues3 m_TargetKVs;
    KeyValues3 m_PreGenerationKVs;
    char pad_2700[0x30];
    KeyValues3 m_FinalKVs;
    char pad_2701[0x18];
    char m_vecGeneratedTextures[0x18];
    char end_pad_2702[0x8];
};
