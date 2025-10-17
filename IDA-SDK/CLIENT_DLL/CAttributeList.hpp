#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class CAttributeManager;

class CAttributeList {
    char _vtable_pad_243[0x8];
    char m_Attributes[0x68];
    CAttributeManager* m_pManager;
};
