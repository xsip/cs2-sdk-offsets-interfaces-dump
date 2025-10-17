#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_ModelConfigHandle_t.hpp"

class client_ActiveModelConfig_t {
    char vTable572[0x30];
    client_ModelConfigHandle_t m_Handle;
    char pad_573[0x4];
    CUtlSymbolLarge m_Name;
    char m_AssociatedEntities[0x18];
    char m_AssociatedEntityNames[0x18];
};
