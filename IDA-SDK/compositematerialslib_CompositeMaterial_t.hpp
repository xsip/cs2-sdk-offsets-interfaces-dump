#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class compositematerialslib_CompositeMaterial_t {
    char vTable2629[0x8];
    KeyValues3 m_TargetKVs;
    KeyValues3 m_PreGenerationKVs;
    char pad_2630[0x30];
    KeyValues3 m_FinalKVs;
    char pad_2631[0x18];
    char m_vecGeneratedTextures[0x18];
    char end_pad_2632[0x8];
};
