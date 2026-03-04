#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_ModelConfigHandle_t.hpp"

class client_ActiveModelConfig_t {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    void **__vftable_5;
    client_ModelConfigHandle_t m_Handle;
    char pad_1356[0x4];
    CUtlSymbolLarge m_Name;
    char m_AssociatedEntities[0x18];
    char m_AssociatedEntityNames[0x18];
};
