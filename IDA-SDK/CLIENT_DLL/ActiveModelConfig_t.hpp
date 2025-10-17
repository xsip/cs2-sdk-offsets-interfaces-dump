#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "ModelConfigHandle_t.hpp"

class ActiveModelConfig_t {
    char _vtable_pad_9[0x30];
    ModelConfigHandle_t m_Handle;
    char pad_10[0x4];
    CUtlSymbolLarge m_Name;
    char m_AssociatedEntities[0x18];
    char m_AssociatedEntityNames[0x18];
};
