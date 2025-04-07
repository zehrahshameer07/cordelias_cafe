<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
                xmlns:ns="http://www.cordeliascafe.com">
    <xsl:template match="/">
        <html>
            <head>
                <title>Cordelia's Café - Cake List</title>
            </head>
            <body>
                <h1>Cordelia's Café Cake List</h1>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Weight</th>
                        <th>Available</th>
                    </tr>
                    <xsl:for-each select="ns:patisserie/ns:cakes/ns:cake">
                        <tr>
                            <td><xsl:value-of select="ns:name"/></td>
                            <td><xsl:value-of select="ns:price"/></td>
                            <td>
                                <xsl:value-of select="ns:weight"/> 
                                (<xsl:value-of select="ns:weight/@unit"/>)
                            </td>
                            <td>
                                <xsl:choose>
                                    <xsl:when test="ns:isAvailable='true'">Yes</xsl:when>
                                    <xsl:otherwise>No</xsl:otherwise>
                                </xsl:choose>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
