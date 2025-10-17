#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class client_CAttributeManager;

class client_CAttributeList {
    char vTable806[0x8];
    char m_Attributes[0x68];
    client_CAttributeManager* m_pManager;
};
