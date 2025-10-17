#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class server_CAttributeManager;

class server_CAttributeList {
    char vTable2870[0x8];
    char m_Attributes[0x68];
    server_CAttributeManager* m_pManager;
};
