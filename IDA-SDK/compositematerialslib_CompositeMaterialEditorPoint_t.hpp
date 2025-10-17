#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class compositematerialslib_CompositeMaterialEditorPoint_t {
    char m_ModelName[0xe0];
    int32_t m_nSequenceIndex;
    float32 m_flCycle;
    KeyValues3 m_KVModelStateChoices;
    bool m_bEnableChildModel;
    char pad_2616[0x7];
    char m_ChildModelName[0xe0];
    char m_vecCompositeMaterialAssemblyProcedures[0x18];
    char m_vecCompositeMaterials[0x18];
    char end_pad_2617[0x8];
};
